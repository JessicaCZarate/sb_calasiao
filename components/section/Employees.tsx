import { Employee } from "@/app/lib/schema";
import Image from "next/image";

interface EmployeesProps {
  employees: Employee[];
}

const Employees: React.FC<EmployeesProps> = ({ employees }) => {
  return (
    <section>
      <pre className="hidden">{JSON.stringify({ employees }, null, 2)}</pre>
      <div>
        <h1>Office of the Sangguniang Bayan Secretariat</h1>
      </div>
      <div className="flex flex-wrap space-x-5 p-5">
        {employees.map((employee) => (
          <div key={employee.id}>
            <h2>{employee.name}</h2>
            <p>{employee.title}</p>
            <p>{employee.role}</p>
            <Image
              src={employee.image}
              alt={employee.image}
              width={100}
              height={300}
              className="h-auto w-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Employees;
