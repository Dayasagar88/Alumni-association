import { useState, useEffect } from 'react';
import {
  BriefcaseIcon,
  CalendarIcon,
  MailOpenIcon,
  PhoneIcon,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { auth, db } from '../../lib/firebase'; // Assuming firebase.js includes Firestore
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    displayName: '',
    profession: '',
    college: '',
    year: '',
    mobileNumber: '',
    about: '',
  });

  const navigate = useNavigate();

  // Fetch the authenticated user's details from Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        // Fetch user's Firestore profile data
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setProfileData(userDoc.data()); // Load Firestore profile data
        }
      } else {
        navigate('/login'); // Redirect if not authenticated
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Toggle between view and edit mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Handle form input changes
  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  // Save updated profile data to Firebase
  const handleSave = async () => {
    try {
      // Update Firebase Auth displayName
      await updateProfile(user, {
        displayName: profileData.displayName,
      });

      // Update Firestore with profile data
      await setDoc(doc(db, 'users', user.uid), profileData);

      setIsEditing(false); // Exit edit mode
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error.message);
      alert('An error occurred while updating your profile. Please try again.');
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Profile
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    View and manage your alumni association profile.
                  </p>
                </div>
                <div className="flex flex-col gap-2 lg:justify-start justify-between min-[400px]:flex-row">
                  <div className="flex gap-2">
                    {!isEditing && (
                      <Button
                        className="bg-[#FF9933]"
                        onClick={handleEditToggle}
                      >
                        Edit Profile
                      </Button>
                    )}
                    {isEditing && <Button onClick={handleSave}>Save</Button>}
                    <Button>Account Settings</Button>
                  </div>
                  <Button
                    onClick={() => {
                      auth.signOut();
                      navigate('/');
                    }}
                    variant="ghost"
                    className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
                  >
                    Logout
                  </Button>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <div className="relative h-32 bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_bVcPNq-HujfJEYAb6H1G1yHOK4rM0YJeZQ&s"
                      alt="Banner"
                      className="object-cover w-full"
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="border-4 border-background">
                      <AvatarImage
                        src={user.photoURL || 'https://via.placeholder.com/150'}
                        alt="Profile"
                      />
                      <AvatarFallback>
                        {user.displayName?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      {!isEditing ? (
                        <>
                          <h3 className="text-xl font-bold">
                            {profileData.displayName || 'Anonymous User'}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Class of{' '}
                            {profileData.year || new Date().getFullYear()}
                          </p>
                        </>
                      ) : (
                        <>
                          <input
                            type="text"
                            name="displayName"
                            value={profileData.displayName}
                            onChange={handleChange}
                            className="border p-2 rounded"
                          />
                          <input
                            type="text"
                            name="year"
                            value={profileData.year}
                            onChange={handleChange}
                            className="border p-2 rounded"
                            placeholder="Graduation Year"
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MailOpenIcon className="h-4 w-4" />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <PhoneIcon className="h-4 w-4" />
                      {!isEditing ? (
                        <span>
                          {profileData.mobileNumber || '+91 123456789'}
                        </span>
                      ) : (
                        <input
                          type="text"
                          name="mobileNumber"
                          value={profileData.mobileNumber}
                          onChange={handleChange}
                          className="border p-2 rounded"
                          placeholder="Mobile Number"
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BriefcaseIcon className="h-4 w-4" />
                      {!isEditing ? (
                        <span>{profileData.profession || 'Profession '}</span>
                      ) : (
                        <input
                          type="text"
                          name="profession"
                          value={profileData.profession}
                          onChange={handleChange}
                          className="border p-2 rounded"
                          placeholder="Profession"
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarIcon className="h-4 w-4" />
                      {!isEditing ? (
                        <span>{profileData.college || 'College Name'}</span>
                      ) : (
                        <input
                          type="text"
                          name="college"
                          value={profileData.college}
                          onChange={handleChange}
                          className="border p-2 rounded"
                          placeholder="College Name"
                        />
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">About</h4>
                    {!isEditing ? (
                      <p className="text-sm text-muted-foreground">
                        {profileData.about || 'No description available'}
                      </p>
                    ) : (
                      <textarea
                        name="about"
                        value={profileData.about}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        placeholder="About You"
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
