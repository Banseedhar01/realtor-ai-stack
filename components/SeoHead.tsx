type JsonLd = Record<string, unknown>;

type SeoHeadProps = {
  schemas: JsonLd | JsonLd[];
};

export default function SeoHead({ schemas }: SeoHeadProps) {
  const payloads = Array.isArray(schemas) ? schemas : [schemas];

  return (
    <>
      {payloads.map((schema, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
