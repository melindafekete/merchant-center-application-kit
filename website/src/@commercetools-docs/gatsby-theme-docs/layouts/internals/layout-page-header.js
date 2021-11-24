/* eslint-disable react/prop-types */
import SpacingsStack from '@commercetools-uikit/spacings-stack';
import LayoutPageHeader from '@commercetools-docs/gatsby-theme-docs/src/layouts/internals/layout-page-header';
import DeprecationMessage from '../../../../components/deprecation-message';

const LayoutPageHeaderWithDeprecationMessage = (props) => {
  return (
    <LayoutPageHeader>
      <SpacingsStack>
        <DeprecationMessage />
        <div>{props.children}</div>
      </SpacingsStack>
    </LayoutPageHeader>
  );
};

export default LayoutPageHeaderWithDeprecationMessage;
