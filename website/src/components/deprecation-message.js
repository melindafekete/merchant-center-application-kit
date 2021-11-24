import Text from '@commercetools-uikit/text';
import { ContentNotifications } from '@commercetools-docs/ui-kit';
import { Link } from '@commercetools-docs/gatsby-theme-docs';

const DeprecationMessage = () => (
  <ContentNotifications.Warning>
    <Text.Body>
      You are looking at the legacy documentation for Custom Applications.
      <br />
      <Link href="https://docs.commercetools.com/custom-applications/releases">
        Read the announcement
      </Link>
      .
    </Text.Body>
  </ContentNotifications.Warning>
);

export default DeprecationMessage;
