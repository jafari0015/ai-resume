import React, { useState, type FormEvent } from "react";
import FileUploader from "~/components/FileUploader";
import Navbar from "~/components/Navbar";

const Upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState();
  const [file, setFile] = useState<File | null>(null);

  const handleAnalyzer = async ({
    file,
    companyName,
    companyTitle,
    companyDescription,
  }: {
    file: File;
    companyName: string;
    companyTitle: string;
    companyDescription: string;
  }) => {};
  const handleOnsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest("form");
    if (!form) return;

    const formData = new FormData(form);
    const companyName = formData.get("company-name") as string;
    const companyTitle = formData.get("company-title") as string;
    const companyDescription = formData.get("company-description") as string;

    if (!file) {
      handleAnalyzer({
        file,
        companyName,
        companyTitle,
        companyDescription,
      });
    }
  };

  const handleOnSelectFile = (file: File | null) => {
    setFile(file);
  };

  return (
    <main className="bg-[url('images/bg-main.svg')] bg-cover">
      <section className="main-section py-16">
        <Navbar />
        <div className="page-heading">
          <h1>Smart Feedback For Your Dream Job.</h1>
          {isProcessing ? (
            <>
              {statusText}
              <img src="/images/resume-scan.gif" className="w-full" />
            </>
          ) : (
            <h2>Drop your resume for an ATS scroe and tips for improvment </h2>
          )}
          {!isProcessing && (
            <form
              id="upload-resume"
              className="flex flex-col gap-4 mt-8"
              onClick={handleOnsubmit}
            >
              <div className="form-div">
                <label htmlFor="company-name">Company Name </label>
                <input
                  type="text"
                  name="company-name"
                  placeholder="Company Name "
                  id="company-name"
                />
              </div>
              <div className="form-div">
                <label htmlFor="company-name">Company Title </label>
                <input
                  type="text"
                  name="company-title"
                  placeholder="Company Title "
                  id="company-titel"
                />
              </div>
              <div className="form-div">
                <label htmlFor="company-name">Company Description </label>
                <textarea
                  rows={5}
                  name="company-description"
                  placeholder="Company Description "
                  id="company-description"
                />
              </div>
              <div className="form-div">
                <label htmlFor="company-name">Upload Resume </label>
                <FileUploader onSelectFile={handleOnSelectFile} />
              </div>
              <button className="primary-button" type="submit">
                {" "}
                Analyze Resume{" "}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Upload;
