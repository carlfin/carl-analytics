import cookies from 'js-cookie';
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';

const KEY = 'carlId';
const NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';

function createId() {
  // Try to read a `carlId` cookie value directly.
  const cookieVal = cookies.get(KEY);

  // Return existing value.
  if (cookieVal) {
    return cookieVal;
  }

  // Read the id from the Google Analytics cookie.
  const gaCookie = cookies.get('_ga');

  // Generate a unique id. If there is a _ga value read then use this as a base.
  const id = gaCookie ? uuidv5(gaCookie, NAMESPACE) : uuidv4();

  // Set a new cookie with the generated value.
  cookies.set(KEY, id);

  return id;
}

export default createId;
