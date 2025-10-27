export default function Timeline({ items }) {
  return (
    <ol className="relative border-s border-primary/20">
      {items.map((item, idx) => (
        <li key={idx} className="ms-6 pb-8 last:pb-0">
          <span className="absolute -start-2.5 mt-1 size-5 rounded-full bg-primary"></span>
          <h3 className="font-bold text-gray-900">{item.title}</h3>
          {item.place && (
            <p className="text-primary mt-1">{item.place}</p>
          )}
          {item.period && (
            <p className="text-gray-500 text-sm mt-1">{item.period}</p>
          )}
          {Array.isArray(item.points) && item.points.length > 0 && (
            <ul className="list-disc pr-5 mt-3 text-gray-700 leading-8">
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}