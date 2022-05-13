export const Breadcrumb: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="breadcrumb">
      <h1 className="breadcrumb-title">{title}</h1>
    </div>
  );
}
