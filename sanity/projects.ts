const projectSchema = {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
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
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'gitHub',
      title: 'GitHub',
      type: 'string',
    },
    {
      name: 'live',
      title: 'Live',
      type: 'string',
    },
  ],
};

export default projectSchema;
