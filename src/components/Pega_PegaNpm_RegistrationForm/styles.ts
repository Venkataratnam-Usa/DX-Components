import styled from 'styled-components';

export default styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 20px;

  background: linear-gradient(135deg,#f5f7fa,#c3cfe2);

  /* Particles */
  .particles::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background-image: radial-gradient(
      rgba(0,0,0,0.15) 1px,
      transparent 1px
    );
    background-size: 50px 50px;
    animation: move 60s linear infinite;
    opacity: 0.05;
  }

  @keyframes move {
    from { transform: translate(0,0); }
    to { transform: translate(-500px,-500px); }
  }

.psc-Card {
  width: 100%;
  max-width: 520px;
  border-radius: 18px;
  padding: 70px 60px;   
  background: #ffffff;
  box-shadow: 0 20px 60px rgba(0,0,0,0.12);
}

  .psc-CardHeader {
    font-size: 30px;
    font-weight: 600;
    position: relative;
    margin-top: 20px;
    margin-left:180px;
    color: #1677ff;
  }

  .floating-group {
    width: 500px;
    position: relative;
    margin-top: 20px;
    margin-left: 100px;
    margin-right: 100px;
  }

  .floating-group input {
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background: #fff;
    font-size: 18px;
    outline: none;
    transition: 0.3s;
  }

  .floating-group input:focus {
    border-color: #1677ff;
    box-shadow: 0 0 0 2px rgba(22,119,255,0.2);
  }

  .floating-group label {
    position: absolute;
    left: 12px;
    top: 12px;
    font-size: 20px;
    transition: 0.3s;
    pointer-events: none;
    background: #fff;
    padding: 0 4px;
    color: #888;
    
  }

  .floating-group input:focus + label,
  .floating-group input:not(:placeholder-shown) + label {
    top: -10px;
    font-size: 12px;
    color: #1677ff;
  }

  .radio-group {
  display: flex;
  gap: 40px;
  margin-top: 15px;
  margin-left: 100px;
  font-size: 20px;
}

.radio-group label {
  display: flex;          
  align-items: center;
  gap: 10px;              
  cursor: pointer;
}

.radio-group input[type="radio"] {
  width: 18px;
  height: 18px;
}

.register-btn {
  height: 36px;
  width: 200px;
  font-size: 20px;
  padding: 0px 20px 2px 20px;
  border-radius: 8px;
  color: #fff;
  display: block;
  background: green;
  margin: 20px auto 30px auto;  /* centers button */
}

  .strength {
    font-size: 12px;
    margin-top: 5px;
  }

  .strength.Weak { color: #ff4d4f; }
  .strength.Medium { color: #faad14; }
  .strength.Strong { color: #52c41a; }

  .toggle {
    position: absolute;
    right: 10px;
    top: 12px;
    padding-top: 10px;
    font-size: 15px;
    cursor: pointer;
    color: #1677ff;
  }

  .error {
    color: #ff4d4f;
    font-size: 12px;
    margin-top: 4px;
    display: block;
  }

  @media (max-width: 900px) {
    .psc-Card {
      max-width: 100%;
      padding: 20px;
    }
  }
`;