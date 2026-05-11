const Task1 = {
  name: "Alephzain Carpio",
  course: "BS Computer Science",
  bio: "Aspiring Full Stack Developer"
};

function Profile() {
  return (
    <div className="profile-card">
      <p>Name: {Task1.name}</p>
      <p>Course: {Task1.course}</p>
      <p>Bio: {Task1.bio}</p>
    </div>
  );
}

export default Profile;