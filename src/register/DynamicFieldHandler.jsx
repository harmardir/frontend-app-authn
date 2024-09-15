import React, { useEffect } from 'react';

const DynamicFieldHandler = ({ ageBracket }) => {
  useEffect(() => {
    const jobTitleField = document.getElementById('id_job_title').closest('.form-group');
    const institutionNameField = document.getElementById('id_institution_name').closest('.form-group');
    const institutionTypeField = document.getElementById('id_institution_type').closest('.form-group');
    const schoolNameField = document.getElementById('id_school_name').closest('.form-group');
    const schoolGradeField = document.getElementById('id_school_grade').closest('.form-group');

    const toggleFields = () => {
      if (ageBracket === '14-19') {
        jobTitleField.style.display = 'none';
        institutionNameField.style.display = 'none';
        institutionTypeField.style.display = 'none';
        schoolNameField.style.display = '';
        schoolGradeField.style.display = '';
      } else {
        jobTitleField.style.display = '';
        institutionNameField.style.display = '';
        institutionTypeField.style.display = '';
        schoolNameField.style.display = 'none';
        schoolGradeField.style.display = 'none';
      }
    };

    toggleFields();
  }, [ageBracket]);

  return null;
};

export default DynamicFieldHandler;