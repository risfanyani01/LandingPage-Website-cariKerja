import Button from "./Button";

const Card = (props) => {
  const {
    title,
    job_description,
    job_qualification,
    company_city,
    salary_min,
    salary_max,
  } = props;

  return (
    <div className="lg:w-[380px] md:w-[340px] mb-8 shadow-sm border rounded cursor-pointer hover:shadow-md relative">
      <Button className="text-sm text-white absolute -top-4 right-2 rounded-full bg-blue-900">
        Apply Now
      </Button>
      <div className="px-4 mt-8 mb-8">
        <h2 className="font-bold text-2xl text-slate-900">{title}</h2>
        <div className="my-4">
          <p className="text-blue-900 font-bold">Job Qualification</p>
          <p className="text-sm text-gray-600">{job_qualification}</p>
        </div>
        <p className="text-md font-bold text-blue-900 mb-2">Range Salary</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-yellow-200 px-4 py-2 bg-slate-900 inline-block rounded">
            {salary_min} - {salary_max}
          </span>
          <p className="text-sm text-blue-900">{company_city}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
