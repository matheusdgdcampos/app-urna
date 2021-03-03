interface UserProps {
  id: string;
  codigo: string;
  votou: boolean;
  tipo: 'standard' | 'admin';
}

export default UserProps;
