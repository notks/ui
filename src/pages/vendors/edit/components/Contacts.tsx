/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @copyright Copyright (c) 2021. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @copyright Copyright (c) 2021. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Card, Element } from '@invoiceninja/cards';
import { InputField } from '@invoiceninja/forms';
import { useTranslation } from 'react-i18next';
import { Contact } from './Contact';

type Props = { data?: any };

export function Contacts(props: Props) {
  const [t] = useTranslation();

  return (
    <Card title={t('contacts')} className="mb-5">
      <Element leftSide={t('contacts')}>
       <Contact/>
       <Contact/><Contact/><Contact/><Contact/><Contact/><Contact/>
      </Element>
    </Card>
  );
}