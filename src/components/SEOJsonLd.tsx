type SEOJsonLdProps = {
  data: object;
};

const SEOJsonLd = ({ data }: SEOJsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default SEOJsonLd;
