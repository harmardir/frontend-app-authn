import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';

import messages from './messages';

const SmallLayout = ({ intl }) => (
  <span className="bg-primary-400 w-100">
    <div className="col-md-12 small-screen-top-stripe" />
    <div>
      <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
        <Image className="logo-small" alt={getConfig().SITE_NAME} src={getConfig().LOGO_WHITE_URL} />
      </Hyperlink>
      <div className="d-flex align-items-center mb-3 mt-3 mr-3">
        <div className={classNames({ 'small-yellow-line mr-n2.5': getConfig().SITE_NAME === 'edX' })} />
      </div>
    </div>
  </span>
);

SmallLayout.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SmallLayout);
