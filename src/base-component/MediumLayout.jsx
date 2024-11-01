import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';

import messages from './messages';

import bennerHorizontal from './banner_horizontal.png';

const MediumLayout = ({ intl }) => (

    
    <div className="w-100 p-0 mb-3 d-flex banner__image medium-layout midium-banner"
    style={{ backgroundImage: `url('${bennerHorizontal}')`, backgroundSize: 'cover', backgroundPosition: 'center'
    }}>
    
        
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
