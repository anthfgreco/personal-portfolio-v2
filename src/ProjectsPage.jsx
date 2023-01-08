import { useEffect } from "react";

function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects - Anthony Greco";
  }, []);

  return (
    <div>
      <p className="mt-9 text-[#202020] dark:text-[#ededed]">
        To be implemented!
      </p>
    </div>
  );
}

export default ProjectsPage;
