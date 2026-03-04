import React, { useState } from 'react';

interface Props {
  getPConnect: () => any;
}

interface FormState {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  contact: string;
  password: string;
  confirmPassword: string;
}

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  gender: '',
  email: '',
  contact: '',
  password: '',
  confirmPassword: ''
};

const RegistrationForm: React.FC<Props> = (props) => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<any>({});
  const [passwordStrength, setPasswordStrength] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  /* ---------------------------------- */
  /* Password Strength (Moved Above)    */
  /* ---------------------------------- */
  const checkStrength = (password: string) => {
    if (!password) {
      setPasswordStrength('');
      return;
    }

    const strong =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    const medium =
      /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (strong.test(password)) setPasswordStrength('Strong');
    else if (medium.test(password)) setPasswordStrength('Medium');
    else setPasswordStrength('Weak');
  };

  /* ---------------------------------- */
  /* Handle Change                      */
  /* ---------------------------------- */
  const handleChange = (field: keyof FormState, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);

    if (field === 'password') {
      checkStrength(value);
    }

    setErrors((prev: any) => ({
      ...prev,
      [field]: undefined
    }));
  };

  /* ---------------------------------- */
  /* Validation                         */
  /* ---------------------------------- */
  const validate = () => {
    const newErrors: any = {};

    if (formData.firstName === formData.lastName) {
      newErrors.lastName =
        'First Name and Last Name cannot be same';
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    const contactRegex =
      /^[0-9]{10}$/;

    if (!contactRegex.test(formData.contact)) {
      newErrors.contact =
        'Contact number must be 10 digits';
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        'Password must contain 8 characters, uppercase, lowercase, number & special character';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword =
        'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------------------------------- */
  /* Submit (Official Constellation Way)*/
  /* ---------------------------------- */
  const handleSubmit = async () => {
    if (!validate()) return;

    const pConn = props.getPConnect();
    const actionsApi = pConn.getActionsApi();

    // 🔥 Update Pega Case Properties
    actionsApi.updateFieldValue('.FirstName', formData.firstName);
    actionsApi.updateFieldValue('.LastName', formData.lastName);
    actionsApi.updateFieldValue('.Gender', formData.gender);
    actionsApi.updateFieldValue('.Email', formData.email);
    actionsApi.updateFieldValue('.Contact', formData.contact);
    actionsApi.updateFieldValue('.Password', formData.password);

    try {
      // 🔥 Official Save Method in Constellation
      await actionsApi.finishAssignment();

      console.log('Data saved successfully in Pega');

      // Optional Reset
      setFormData(initialFormState);
      setErrors({});
      setPasswordStrength('');
      setShowPassword(false);
    } catch (error) {
      console.error('Error saving case:', error);
    }
  };

  /* ---------------------------------- */
  /* UI                                 */
  /* ---------------------------------- */
  return (
    <div className="form-container">
      <div className="form-card">

        <h2>Registration Form</h2>

        {/* First Name */}
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) =>
            handleChange('firstName', e.target.value)
          }
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        {/* Last Name */}
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) =>
            handleChange('lastName', e.target.value)
          }
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        {/* Gender */}
        <div className="radio-group">
          {['Male', 'Female', 'Other'].map((g) => (
            <label key={g}>
              <input
                type="radio"
                value={g}
                checked={formData.gender === g}
                onChange={(e) =>
                  handleChange('gender', e.target.value)
                }
              />
              {g}
            </label>
          ))}
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) =>
            handleChange('email', e.target.value)
          }
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Contact */}
        <input
          type="text"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={(e) =>
            handleChange('contact', e.target.value)
          }
        />
        {errors.contact && <p className="error">{errors.contact}</p>}

        {/* Password */}
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              handleChange('password', e.target.value)
            }
          />
          <span
            className="toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        {passwordStrength && (
          <p className={`strength ${passwordStrength.toLowerCase()}`}>
            {passwordStrength}
          </p>
        )}
        {errors.password && <p className="error">{errors.password}</p>}

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            handleChange('confirmPassword', e.target.value)
          }
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        {/* Submit */}
        <button
        type="button"
        className="register-btn"
        onClick={handleSubmit}
        >
        Register
        </button>

      </div>
    </div>
  );
};

export default RegistrationForm;