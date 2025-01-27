/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @copyright Copyright (c) 2021. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @copyright Copyright (c) 2021. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Card } from '@invoiceninja/cards';
import { InputLabel } from '@invoiceninja/forms';
import { useCurrentRecurringInvoice } from 'common/hooks/useCurrentRecurringInvoice';
import { injectBlankItemIntoCurrent } from 'common/stores/slices/invoices';
import { DebouncedCombobox } from 'components/forms/DebouncedCombobox';
import { ClientCreate } from 'pages/invoices/common/components/ClientCreate';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useSetCurrentRecurringInvoiceProperty } from '../hooks/useSetCurrentRecurringInvoiceProperty';
import { ClientContactSelector } from './ClientContactSelector';

interface Props {
  readonly?: boolean;
}

export function ClientSelector(props: Props) {
  const [t] = useTranslation();
  const invoice = useCurrentRecurringInvoice();
  const onChange = useSetCurrentRecurringInvoiceProperty();
  const dispatch = useDispatch();

  useEffect(() => {
    if (invoice?.client_id && invoice?.line_items.length === 0) {
      dispatch(injectBlankItemIntoCurrent());
    }
  }, [invoice]);

  return (
    <Card className="col-span-12 xl:col-span-4 h-max" withContainer>
      <div className="flex items-center justify-between">
        <InputLabel>{t('client')}</InputLabel>
        {!props.readonly && <ClientCreate />}
      </div>

      <DebouncedCombobox
        endpoint="/api/v1/clients"
        label="display_name"
        onChange={(value) => onChange('client_id', value.value)}
        defaultValue={invoice?.client_id}
        disabled={props.readonly}
      />

      <ClientContactSelector />
    </Card>
  );
}
