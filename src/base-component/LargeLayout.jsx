import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';

import bennerVertical from './banner_vertical.png';


const LargeLayout = ({ intl }) => (

  <div className="w-50 d-flex banner__image large-layout"
   style={{ backgroundImage: `url('${bennerVertical}')`, backgroundSize: 'cover', backgroundPosition: 'center'
}}>

     

      <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
        <Image className="logo position-absolute" alt={getConfig().SITE_NAME} src={getConfig().LOGO_WHITE_URL} />
      </Hyperlink>
      <div className="min-vh-100 d-flex align-items-center">
        <div className={classNames({ 'large-yellow-line mr-n4.5': getConfig().SITE_NAME === 'edX' })} />
      </div>
  </div>
);

LargeLayout.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(LargeLayout);