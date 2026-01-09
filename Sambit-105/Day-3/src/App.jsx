import React from "react";
 
 function App() {
   return (
     <div style={{ padding: "20px" }}>
       <h1>Props Drilling Example</h1>
       <PropsDrillingApp />
 
       <hr />
 
       <h1>Composition Pattern Example</h1>
       <CompositionApp />
     </div>
   );
 }
 
 
 function PropsDrillingApp() {
   const userName = "Sambit";
 
   return <Dashboard userName={userName} />;
 }
 
 function Dashboard({ userName }) {
   return <Profile userName={userName} />;
 }
 
 function Profile({ userName }) {
   return <UserCard userName={userName} />;
 }
 
 function UserCard({ userName }) {
   return <h3>Hello, {userName}</h3>;
 }
 
 function CompositionApp() {
   return (
     <DashboardLayout>
       <ProfileLayout>
         <UserCardComposed />
       </ProfileLayout>
     </DashboardLayout>
   );
 }
 
 function DashboardLayout({ children }) {
   return <div>{children}</div>;
 }
 
 function ProfileLayout({ children }) {
   return <div>{children}</div>;
 }
 
 function UserCardComposed() {
   const userName = "Sambit";
   return <h3>Hello, {userName}</h3>;
 }
 
 export default App;
 