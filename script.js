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

const teacher1 = new Teacher('./images/mulopa.jpg', 'Ms Mulopa', 'Head Teacher - Secondary School', "Ms Mulopa is dedicated to providing a safe, welcoming, and academically challenging environment for all students. With over a decade's worth of experience in education, she brings a wealth of knowledge and expertise to the role, working closely with teachers, staff, and families to ensure that every student has the support and resources they need to succeed.");

const teacher2 = new Teacher('./images/zulu.jpg', 'Mrs Zulu', 'Head Teacher - Primary School', 'Mrs Zulu is committed to supporting the academic, social, and emotional needs of all students. Mrs Zulu works closely with the principal, teachers, and staff to ensure that the school runs smoothly, while also playing an important role in disciplinary issues and student support.');

const teacher3 = new Teacher('./images/shamooya.jpg', 'Mrs Shamooya', 'Secondary School Teacher', 'Mrs Shamooya is dedicated to helping students achieve academic success and personal growth. She provides individualized guidance and support to students, helping them to navigate academic and personal challenges, set goals, and make informed decisions about their education and future. Mrs Shamooya works to create a supportive and inclusive school environment');

const teacher4 = new Teacher('./images/kayanga.jpg', 'Mr Kayanga', 'Primary & Secondary Teacher', 'Mr Kayanga creates inclusive learning environments that cater to students developmental needs and abilities. He designs engaging curricula that promote critical thinking and personal growth, and He communicates regularly with families and colleagues to support each the academic and social-emotional development of each student.');

const teacher5 = new Teacher('./images/ngandu.jpg', 'Mr Ngandu', 'Primary School Teacher', "Mr Ngandu fosters a positive learning environment, delivers engaging curriculum, and promotes students' social and academic growth. He collaborates with colleagues and parents to support each child's success.");

const teacher6 = new Teacher('./images/shanduka.jpg', 'Ms Shanduka', 'Early Childhood Education Teacher', 'Ms Shanduka creates a safe and inclusive learning environment and implements engaging educational programs, and promotes social-emotional growth through play-based activities. Ms Shanduka communicates regularly with parents and colleagues to support the success of each child.');

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