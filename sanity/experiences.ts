const experiencesSchema = {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['Study', 'Work'] },
    },

    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
  ],
};

export default experiencesSchema;
