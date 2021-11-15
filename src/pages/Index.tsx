/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2021. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { useSelector } from "react-redux";
import { RootState } from "../common/stores/store";

export function Index() {
  const user = useSelector((state: RootState) => state.user.user);

  return <div>Hello, {user.first_name}</div>;
}
