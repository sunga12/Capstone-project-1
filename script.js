const menu = document.querySelector('.hamburger');

const navLink = document.querySelector('.nav-menu');

const close = document.querySelector('.close-icon');

const lists = document.querySelectorAll('.nav-menu li');

menu.addEventListener('click', () => {
  navLink.style.marginLeft = 0;
});

close.addEventListener('click', () => {
  navLink.style.marginLeft = '-1000px';
});

lists.forEach((list) => {
  list.addEventListener('click', () => {
    navLink.style.marginLeft = '-1000px';
  });
});

const mainSpeakers = document.querySelector('#speakers');

class Teacher {
  constructor(image, name, profession, description) {
    this.image = image;
    this.name = name;
    this.profession = profession;
    this.description = description;
  }
}

const teacher1 = new Teacher('./images/daniel-odei-siaw.jpg', 'Daniel Odei Siaw', 'Principal', "Daniel Odei Siaw is dedicated to providing a safe, welcoming, and academically challenging environment for all students. With over a decade's worth of experience in education, Daniel brings a wealth of knowledge and expertise to the role, working closely with teachers, staff, and families to ensure that every student has the support and resources they need to succeed.");

const teacher2 = new Teacher('./images/irene-valeria.jpg', 'Ireen Valeria', 'Vice-Principal', 'Ireen Valeria is committed to supporting the academic, social, and emotional needs of all students. Ireen works closely with the principal, teachers, and staff to ensure that the school runs smoothly, while also playing an important role in disciplinary issues and student support.');

const teacher3 = new Teacher('./images/ama-asante.jpg', 'Ama Asante', 'Guidance Counselor', 'Ama Asante is dedicated to helping students achieve academic success and personal growth. Ama provides individualized guidance and support to students, helping them to navigate academic and personal challenges, set goals, and make informed decisions about their education and future. Ama works closely with teachers, staff, and parents to create a supportive and inclusive school environment');

const teacher4 = new Teacher('./images/paula-amoa.jpg', 'Paula Amoa', 'Administrative Assistant', 'Paula Amoa plays a critical role in ensuring that the school runs smoothly and efficiently. Paula provides a wide range of services, including managing schedules, handling correspondence, maintaining records, and coordinating meetings and events. Paula works closely with the principal, teachers, and staff to ensure that all administrative tasks are handled promptly and accurately, allowing the school to focus on its core mission of educating students.');

const teacher5 = new Teacher('./images/james-katebe.jpg', 'James Katebe', 'Facilities Manager', "James Katebe is responsible for ensuring that the school's physical plant is safe, functional, and well-maintained. James oversees a wide range of tasks, including maintenance and repairs, custodial services, and groundskeeping. James is dedicated to creating a clean, safe, and welcoming environment for students, staff, and visitors, while also working to optimize the school's physical resources for maximum efficiency and sustainability.");

const teacher6 = new Teacher('./images/kasonde-chewe.jpg', 'Kasonde Chewe', 'School Nurse', 'Kasonde Chewe is dedicated to promoting the health and well-being of all students. Kasonde provides a wide range of services, including administering medication, treating injuries and illnesses, and providing health education and counseling. Kasonde works closely with teachers, staff, and families to ensure that students receive the support and care they need to thrive both in and out of school.');

const mainSpeakersHeading = document.createElement('div');
mainSpeakersHeading.className = 'main-staff-members';
mainSpeakersHeading.innerHTML = '<h2>Staff Members<h2>';
mainSpeakers.appendChild(mainSpeakersHeading);

const line = document.createElement('div');
line.className = 'title-line';
mainSpeakers.appendChild(line);

const medQuery = window.matchMedia('(max-width: 768px)');
let teachers;

if (medQuery.matches) {
  teachers = [
    teacher1,
    teacher2,
  ];
} else {
  teachers = [
    teacher1,
    teacher2,
    teacher3,
    teacher4,
    teacher5,
    teacher6,
  ];
}

const restOfTeachers = [
  teacher3,
  teacher4,
  teacher5,
  teacher6,
];

const teachersSection = document.createElement('div');
teachersSection.className = 'teachers';

mainSpeakers.appendChild(teachersSection);

teachers.forEach((teacher) => {
  const teacherDiv = document.createElement('div');
  teacherDiv.className = 'teacher';
  teachersSection.appendChild(teacherDiv);

  const teacherFaceDiv = document.createElement('div');
  teacherFaceDiv.className = 'teacher-img-div';
  teacherDiv.appendChild(teacherFaceDiv);

  const chessboard = document.createElement('img');
  chessboard.src = './images/chessboard.jpg';
  chessboard.className = 'chessboard';
  teacherFaceDiv.appendChild(chessboard);

  const teacherFace = document.createElement('img');
  teacherFace.src = teacher.image;
  teacherFace.className = 'teacher-img';
  teacherFaceDiv.appendChild(teacherFace);

  const teacherName = document.createElement('div');
  teacherName.className = 'teacher-name';
  teacherName.innerHTML = teacher.name;
  teacherDiv.appendChild(teacherName);

  const teacherProf = document.createElement('div');
  teacherProf.className = 'teacher-prof';
  teacherProf.innerHTML = teacher.profession;
  teacherDiv.appendChild(teacherProf);

  const smallLine = document.createElement('div');
  smallLine.className = 'teacher-line';
  teacherDiv.appendChild(smallLine);

  const teacherDesc = document.createElement('div');
  teacherDesc.className = 'teacher-desc';
  teacherDesc.innerHTML = teacher.description;
  teacherDiv.appendChild(teacherDesc);
});

const moreTeachers = document.createElement('button');
moreTeachers.className = 'more-teachers';
moreTeachers.innerHTML = '<p>View More Teachers<p>';
teachersSection.appendChild(moreTeachers);

const lessTeachers = document.createElement('button');
lessTeachers.className = 'more-teachers';
lessTeachers.style.display = 'none';
lessTeachers.innerHTML = '<p>View Less Teachers<p> <img src="./images/more-less-icon.png>';

moreTeachers.addEventListener('click', () => {
  teachersSection.removeChild(moreTeachers);

  restOfTeachers.forEach((teacher) => {
    const teacherDiv = document.createElement('div');
    teacherDiv.className = 'teacher rest-teacher';
    teachersSection.appendChild(teacherDiv);

    const teacherFaceDiv = document.createElement('div');
    teacherFaceDiv.className = 'teacher-img-div';
    teacherDiv.appendChild(teacherFaceDiv);

    const chessboard = document.createElement('img');
    chessboard.src = './images/chessboard.jpg';
    chessboard.className = 'chessboard';
    teacherFaceDiv.appendChild(chessboard);

    const teacherFace = document.createElement('img');
    teacherFace.src = teacher.image;
    teacherFace.className = 'teacher-img';
    teacherFaceDiv.appendChild(teacherFace);

    const teacherName = document.createElement('div');
    teacherName.className = 'teacher-name';
    teacherName.innerHTML = teacher.name;
    teacherDiv.appendChild(teacherName);

    const teacherProf = document.createElement('div');
    teacherProf.className = 'teacher-prof';
    teacherProf.innerHTML = teacher.profession;
    teacherDiv.appendChild(teacherProf);

    const smallLine = document.createElement('div');
    smallLine.className = 'teacher-line';
    teacherDiv.appendChild(smallLine);

    const teacherDesc = document.createElement('div');
    teacherDesc.className = 'teacher-desc';
    teacherDesc.innerHTML = teacher.description;
    teacherDiv.appendChild(teacherDesc);

    moreTeachers.style.display = 'none';
    lessTeachers.style.display = 'block';
    teachersSection.appendChild(lessTeachers);
  });
});

lessTeachers.addEventListener('click', () => {
  const remover = document.querySelectorAll('.rest-teacher');
  remover.forEach((remover) => {
    remover.remove();
  });

  moreTeachers.style.display = 'block';
  lessTeachers.style.display = 'none';
  teachersSection.appendChild(moreTeachers);
});