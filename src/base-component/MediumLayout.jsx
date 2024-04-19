import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';

import messages from './messages';

const MediumLayout = ({ intl }) => (

    
    <div className="w-100 p-0 mb-3 d-flex banner__image medium-layout"
    style={{ backgroundImage: `url('https://undp-lms.kashida-learning.co/static/undp_ac_theme/images/login_banner_md.png')`
    }}>
      {/* Text overlay */}
      <div className="position-absolute top-0 end-0 text-white p-4">
      <p className="banner-text-md">مكافحة الفساد،
      <br/>
بدءاً من مكان العمل.</p>
    </div>
        
        <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
          <Image alt={getConfig().SITE_NAME} className="logo" src={getConfig().LOGO_WHITE_URL} />
        </Hyperlink>
        <div className="d-flex align-items-center justify-content-center mb-4 ">
          <div className={classNames({ 'mt-1 medium-yellow-line': getConfig().SITE_NAME === 'edX' })} />
          <div>
          </div>
        </div>
     
    </div>
);

MediumLayout.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(MediumLayout);
