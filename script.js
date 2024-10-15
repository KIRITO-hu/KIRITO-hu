document.getElementById('symptomForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let symptoms = document.getElementById('symptoms').value.toLowerCase();
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;

    let diagnosis = '';
    let solutions = '';
    let diet = '';
    let doctor = '';

    // Expanded condition-based diagnosis logic
    if (symptoms.includes('fever') && symptoms.includes('cough') && symptoms.includes('fatigue')) {
        diagnosis = 'You may have the Flu or a respiratory infection.';
        solutions = 'Rest, stay hydrated, and take over-the-counter medications. If symptoms persist, seek medical attention.';
        diet = 'Light foods such as soups, fruits, and vegetables rich in vitamins. Stay hydrated with water and herbal teas.';
        doctor = 'General Practitioner or Pulmonologist if respiratory symptoms worsen.';
    } else if (symptoms.includes('stomach ache') && symptoms.includes('nausea') && symptoms.includes('vomiting')) {
        diagnosis = 'You might have gastritis, food poisoning, or an upset stomach.';
        solutions = 'Rest, avoid solid foods until you feel better, stay hydrated with oral rehydration solutions.';
        diet = 'Bland foods like crackers, bananas, and rice once vomiting subsides. Avoid spicy and greasy foods.';
        doctor = 'Gastroenterologist or Family Doctor.';
    } else if (symptoms.includes('headache') && symptoms.includes('sensitivity to light') && symptoms.includes('nausea')) {
        diagnosis = 'You could be experiencing a Migraine.';
        solutions = 'Rest in a dark, quiet room, take over-the-counter pain relievers. Apply cold compress to the forehead.';
        diet = 'Avoid caffeine, alcohol, and processed foods. Stick to light meals and stay hydrated.';
        doctor = 'Neurologist or Family Doctor if symptoms persist or worsen.';
    } else if (symptoms.includes('joint pain') && symptoms.includes('swelling') && symptoms.includes('stiffness')) {
        diagnosis = 'This could be Arthritis or an inflammatory joint condition.';
        solutions = 'Use anti-inflammatory medications, stay active but avoid overexertion, and apply heat to relieve stiffness.';
        diet = 'A balanced diet rich in Omega-3 fatty acids (fish, nuts) to reduce inflammation. Avoid processed foods.';
        doctor = 'Rheumatologist.';
    } else if (symptoms.includes('shortness of breath') && symptoms.includes('chest pain') && symptoms.includes('fatigue')) {
        diagnosis = 'These are potential symptoms of a heart condition. Immediate medical attention may be required.';
        solutions = 'Seek emergency care if symptoms are severe. For minor cases, rest and avoid stress.';
        diet = 'Heart-healthy diet: low in sodium, rich in fruits, vegetables, and whole grains.';
        doctor = 'Cardiologist.';
    } else if (symptoms.includes('skin rash') && symptoms.includes('itching') && symptoms.includes('swelling')) {
        diagnosis = 'You may have an allergic reaction or skin condition like dermatitis.';
        solutions = 'Use antihistamines or topical creams. Avoid irritants that may have triggered the reaction.';
        diet = 'No specific dietary changes are needed. Ensure you stay hydrated.';
        doctor = 'Dermatologist or Allergist.';
    } else if (symptoms.includes('sore throat') && symptoms.includes('runny nose') && symptoms.includes('cough')) {
        diagnosis = 'You may have a common cold or upper respiratory infection.';
        solutions = 'Rest, drink warm fluids, and use throat lozenges or over-the-counter cold medications.';
        diet = 'Warm soups, honey, and herbal teas can soothe the throat. Stay hydrated.';
        doctor = 'General Practitioner or ENT Specialist (Ear, Nose, Throat) if persistent.';
    } else if (symptoms.includes('frequent urination') && symptoms.includes('increased thirst') && symptoms.includes('fatigue')) {
        diagnosis = 'These could be signs of Diabetes. Consider getting your blood sugar levels tested.';
        solutions = 'Consult a doctor for blood sugar monitoring and management. Avoid high-sugar foods.';
        diet = 'Low-carb diet with a focus on whole grains, vegetables, and lean proteins.';
        doctor = 'Endocrinologist or Family Doctor.';
    } else {
        diagnosis = 'No clear diagnosis available based on the symptoms provided. Please consult a healthcare professional for a more accurate diagnosis.';
        solutions = 'Rest and monitor your symptoms closely. If they worsen or persist, seek medical advice.';
        diet = 'Maintain a balanced, nutritious diet.';
        doctor = 'General Practitioner.';
    }

    // Display results
    document.getElementById('diagnosis').textContent = diagnosis;
    document.getElementById('solutions').textContent = solutions;
    document.getElementById('diet').textContent = diet;
    document.getElementById('doctor').textContent = doctor;

    // Show the result section
    document.getElementById('result').style.display = 'block';
});
