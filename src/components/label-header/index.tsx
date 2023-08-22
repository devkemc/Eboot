export interface LabelHeaderProps {
  label: string;
}
export const LabelHeader = ({ label }: LabelHeaderProps) => {
  return (
    <div className="bg-primary rounded w-100 d-flex align-items-center justify-content-center mb-3">
      <label className="fs-3 text-white" style={{ height: "50px" }}>
        {label}
      </label>
    </div>
  );
};
