import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';


const LargeLayout = ({ intl }) => (

  <div className="w-50 d-flex banner__image large-layout">
      <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
        <Image className="logo position-absolute" alt={getConfig().SITE_NAME} src={getConfig().LOGO_WHITE_URL} />
      </Hyperlink>
      <Image className="background-image" alt="Background" src="https://undp-lms.kashida-learning.co/static/undp_ac_theme/images/login_banner_large.png" />
      <div className="min-vh-100 d-flex align-items-center">
        <div className={classNames({ 'large-yellow-line mr-n4.5': getConfig().SITE_NAME === 'edX' })} />
      </div>
  </div>
);

LargeLayout.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(LargeLayout);
