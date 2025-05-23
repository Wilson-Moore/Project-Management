<?php

namespace App\Services;

use App\Models\Document;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

class DocumentService
{
    /** @var \Illuminate\Filesystem\FilesystemAdapter */
    protected $storage;

    public function __construct()
    {
        $this->storage=Storage::disk('public');
    }

    public function upload(UploadedFile $file, Model $model): Document
    {
        $path=$file->store('documents','public');

        return $model->documents()->create([
            'name'=>$file->getClientOriginalName(),
            'path'=>$path,
            'mime_type'=>$file->getMimeType(),
            'size'=>$file->getSize(),
        ]);
    }

    public function delete(Document $document): bool
    {
        $this->storage->delete($document->path);
        return $document->delete();
    }

    public function download(Document $document): StreamedResponse
    {
        return $this->storage->download(
            $document->path,
            $document->name,
            ['Content-Type'=>$document->mime_type]
        );
    }

    public function preview(Document $document): StreamedResponse
    {
        if (!$this->isPreviewable($document)) {
            abort(403,'Preview not available for this file type');
        }

        return $this->storage->response(
            $document->path,
            $document->name,
            ['Content-Type'=>$document->mime_type,'Content-Disposition'=>'inline',]
        );
    }

    protected function isPreviewable(Document $document): bool
    {
        return in_array($document->mime_type,['application/pdf','image/jpeg','image/png','text/plain',]);
    }
}