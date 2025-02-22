import { Employee } from "@/app/lib/schema";

interface EmployeesProps {
  employees: Employee[];
}

const Employees: React.FC<EmployeesProps> = ({ employees }) => {
  return (
    <div>
      <pre className="hidden">{JSON.stringify({ employees }, null, 2)}</pre>
    </div>
  );
};

export default Employees;
