const aboutDataSchema = {
  name: 'aboutData',
  title: 'About Data',
  type: 'document',
  fields: [
    {
      name: 'firstParagraph',
      title: 'First Paragraph',
      type: 'string',
    },
    {
      name: 'secondParagraph',
      title: 'Second Paragraph',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

export default aboutDataSchema;
