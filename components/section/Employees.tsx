import { Employee } from "@/app/lib/schema";
import ImageComponent from "@/components/ImageComponent";

interface EmployeesProps {
  employees: Employee[];
}

const Employees: React.FC<EmployeesProps> = ({ employees }) => {
  const sortedData = employees.sort((a, b) => a.id - b.id);
  const dataEncoders = sortedData.filter(
    (emp) => emp.role.toLowerCase() === "data encoder"
  );
  const utilitySection = sortedData.filter(
    (emp) => emp.role.toLowerCase() === "utility section"
  );
  return (
    <section>
      <pre className="hidden">{JSON.stringify({ employees }, null, 2)}</pre>
      <div>
        <h1 className="text-center text-gray-800 text-3xl font-figmedium py-5">
          <span className="text-lg">Office of the</span> <br />
          Sangguniang Bayan Secretariat
        </h1>
      </div>
      <div className="flex flex-wrap space-x-5 p-5">
        <ul className="flex flex-col w-full gap-3">
          {sortedData.map((employee) => {
            const isSecretary = employee.role.toLowerCase() === "sb secretary";
            const isRecordSection =
              employee.role.toLowerCase() === "record section";
            const isStenographer =
              employee.role.toLowerCase() === "stenographer";
            if (isSecretary || isRecordSection || isStenographer) {
              return (
                <li key={employee.id} className="text-center">
                  <div className="divider divider-end text-gray-400 font-figlight text-xs">
                    {employee.role}
                  </div>
                  <h2 className="text-lg py-4">{employee.role}</h2>
                  <ImageComponent image={employee} />
                </li>
              );
            }
            return null;
          })}
          {dataEncoders.length > 0 && (
            <li className="text-center">
              <div className="divider divider-end text-gray-400 font-figlight text-xs">
                Data Encoders
              </div>
              <h2 className="text-lg py-4">Data Encoders</h2>
              <div className="flex flex-wrap gap-5 justify-evenly">
                {dataEncoders.map((emp) => (
                  <ImageComponent key={emp.id} image={emp} />
                ))}
              </div>
            </li>
          )}
          {utilitySection.length > 0 && (
            <li className="text-center">
              <div className="divider divider-end text-gray-400 font-figlight text-xs">
                Utility Section
              </div>
              <h2 className="text-lg py-4">Utility Section</h2>
              <div className="flex flex-wrap gap-5 justify-evenly">
                {utilitySection.map((emp) => (
                  <ImageComponent key={emp.id} image={emp} />
                ))}
              </div>
            </li>
          )}
          {sortedData.map((employee) => {
            const isMessenger = employee.role.toLowerCase() === "messenger";
            if (isMessenger) {
              return (
                <li key={employee.id} className="text-center">
                  <div className="divider divider-end text-gray-400 font-figlight text-xs">
                    {employee.role}
                  </div>
                  <h2 className="text-lg py-4">{employee.role}</h2>
                  <ImageComponent image={employee} />
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Employees;
