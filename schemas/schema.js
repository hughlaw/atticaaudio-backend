// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import homepage from './homepage';
import equipmentGroup from './equipmentGroup';
import equipmentItem from './equipmentItem';
import atticaImage from './atticaImage';
import gallery from './gallery';
import rate from './rate';
import section from './section';
import equipmentSection from './equipmentSection';
import siteSettings from './siteSettings';
import rates from './rates';
import faq from './faq';
import faqGroup from './faqGroup';
import accommodation from './accommodation';
import bio from './bio';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    homepage,
    section,
    equipmentSection,
    atticaImage,
    equipmentGroup,
    equipmentItem,
    gallery,
    accommodation,
    rates,
    rate,
    faqGroup,
    faq,
    siteSettings,
    bio,
  ]),
});
