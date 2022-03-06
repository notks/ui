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
import { InputField, SelectField } from '@invoiceninja/forms';
import { useUsersQuery } from 'common/queries/users';
import { Alert } from 'components/Alert';
import { useTranslation } from 'react-i18next';

type Props = { data?: any; formik?: any; errors?: any };

export function Details(props: Props) {
  const [t] = useTranslation();
  const { data: users } = useUsersQuery();

  return (
    <Card title={t('details')} className="mb-5">
      <Element leftSide={t('name')}>
        <InputField
          id="name"
          onChange={props.formik.handleChange}
          value={props.data.name}
        />
        {props.errors?.notes && (
          <Alert type="danger">{props.errors.notes}</Alert>
        )}
      </Element>
      <Element leftSide={t('number')}>
        <InputField
          id="number"
          onChange={props.formik.handleChange}
          value={props.data.number}
        />
      </Element>
      <Element leftSide={t('user')}>
        <SelectField
          id="user_id"
          defaultValue={'User'}
          onChange={props.formik.handleChange}
        >
          <option hidden selected>
            {' '}
            {t('user')}
          </option>
          {users?.data.data.map((user: any, index: any) => {
            return (
              <option value={user.id} key={index}>
                {' '}
                {user.first_name + ' ' + user.last_name}
              </option>
            );
          })}
        </SelectField>
      </Element>
      <Element leftSide={t('id_number')}>
        <InputField
          id="id_number"
          onChange={props.formik.handleChange}
          value={props.data.id_number}
        />
      </Element>
      <Element leftSide={t('vat_number')}>
        <InputField
          id="vat_number"
          onChange={props.formik.handleChange}
          value={props.data.vat_number}
        />
      </Element>
      <Element leftSide={t('website')}>
        <InputField
          id="website"
          onChange={props.formik.handleChange}
          value={props.data.website}
        />
      </Element>
      <Element leftSide={t('phone')}>
        <InputField
          id="phone"
          onChange={props.formik.handleChange}
          value={props.data.phone}
        />
      </Element>
    </Card>
  );
}