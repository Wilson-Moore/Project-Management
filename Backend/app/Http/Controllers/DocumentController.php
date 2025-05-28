<?php

namespace App\Http\Controllers;

use App\Http\Requests\Document\StoreDocumentRequest;
use App\Http\Resources\Document\DocumentResource;
use App\Models\Document;
use App\Models\Operation;
use App\Models\Project;
use App\Services\DocumentService;
use Illuminate\Database\Eloquent\Model;

class DocumentController extends Controller
{
    public function __construct(protected DocumentService $service) {}

    public function store(string $modelType, string $modelId, StoreDocumentRequest $request)
    {
        $model=$this->resolveModel($modelType,$modelId);
        $document=$this->service->upload($request->file('document'),$model);
        return new DocumentResource($document);
    }

    public function download(Document $document)
    {
        return $this->service->download($document);
    }

    public function preview(Document $document)
    {
        return $this->service->preview($document);
    }

    public function destroy(Document $document)
    {
        $this->service->delete($document);
        return response()->noContent();
    }

    protected function resolveModel(string $modelType, string $id)
    {
        return match ($modelType) {
            'operations'=>Operation::where('number', $id)->firstOrFail(),
            'projects'=>Project::findOrFail($id),
            default=>abort(404,'Unsupported model type'),
        };
    }
}