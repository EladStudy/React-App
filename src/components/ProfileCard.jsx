function ProfileCard () {
    const username = "Elad";
    const birthday = 2009;
    const followers = 67000;
    const following = 27;
    let currentyear = 2026;
  return (
    <>
    <h2>@{username}</h2>
    <p>Age: {(currentyear-birthday)}</p>
    <p>Followers: {followers / 1000}K | Following: {following}</p>
    <p>Welcome back, @{username}!</p>
    </>
  );
}

export default ProfileCard;