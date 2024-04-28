import { type SchemaTypeDefinition } from 'sanity';
import homeDataSchema from './home';
import aboutDataSchema from './about';
import projectSchema from './projects';
import skillsSchema from './skills';
import experiencesSchema from './experiences';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeDataSchema,
    aboutDataSchema,
    projectSchema,
    skillsSchema,
    experiencesSchema,
  ],
};
