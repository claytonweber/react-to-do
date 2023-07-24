import Input from "@/components/Input";
import List from '@/components/List';

export default function Logic() {
  const toDos = [
    {
      id: 1,
      title: 'Setup dev env',
      completed: true,
    },
    {
      id: 2,
      title: 'develop website and content',
      completed: false,
    },
    {
      id: 3,
      title: 'deploy to live server',
      completed: false,
    },
  ];
  
  return (
    <div>
      <Input />
      <List toDosProps={toDos} />
      
    </div>
  );
};