
function BreadCrumbs(props) {
      return (
            <div className="breadcrumbs">
                  {props.items.map((item, index) => {
                  // Use dynamic label if available, otherwise fallback to static label
                  const label = props.dynamicLabels[item.key] || item.label;
                        
                  return (
                        <span key={item.path || index}>
                        {index > 0 && <span className="separator"> &gt; </span>}
                        {index === props.items.length - 1 || !item.path ? (
                        <span className="current">{label}</span>
                  ) : (
                        <a href={item.path}>{label}</a>
                  )}
                  </span>
                  );
            })}
            </div>
      );
}

export default BreadCrumbs;