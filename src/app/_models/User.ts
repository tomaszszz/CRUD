export interface UserModel {
  id?: number; // mock endpoint returns only token
  token?: string;
  data?: {
    id: 2;
    email: 'janet.weaver@reqres.in';
    first_name: 'Janet';
    last_name: 'Weaver';
    avatar: 'https://reqres.in/img/faces/2-image.jpg';
  };
}
