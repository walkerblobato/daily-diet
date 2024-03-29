export type NewMealDTO = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  insideDiet: 'GOOD' | 'BAD';
}