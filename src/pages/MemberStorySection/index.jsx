import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "../../assets/images/logo.png";
import unsplash2 from "../../assets/images/unsplash2.png";
import unsplash3 from "../../assets/images/unsplash3.png";
import unsplash4 from "../../assets/images/unsplash4.png";
import unsplash5 from "../../assets/images/unsplash5.png";
import '../../styles/MemberStorySection/index.css'
const storyGrid = [
  {
    userImage: unsplash5, // Using imported logo
    userStoryTitle: "John’s Story",
    userDescription:
      "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh.",
  },
  {
    userImage: unsplash2,
    userStoryTitle: "The Journey",
    userDescription:
      "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc.",
  },
  {
    userImage: unsplash3,
    userStoryTitle: "Catch Day",
    userDescription:
      "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque.",
  },
  {
    userImage: unsplash4,
    userStoryTitle: "Trout Tales",
    userDescription:
      "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed.",
  },
];

export default function MemberStorySection() {
  return (
    <div className="story-section">
      <Typography
      className="member-stories-title"
        gutterBottom
        variant="h6"
        // style={{
        //   fontWeight: "600",
        //   marginLeft: "260px",
        //   fontSize: "48px",
        //   alignItems: 'flex-start',  
        //   textAlign: 'left' 
        // }}
        sx={{
          fontWeight: 600,
          fontSize: {
            xs: '28px', // Mobile screens
            sm: '36px', // Tablet screens
            lg: '48px', // Large screens
          },
          textAlign: {
            xs: 'left',  // Mobile screens
            sm: 'left',  // Tablet screens
            lg: 'left',    // Large screens
          },
          marginLeft:'190px'
        }}
      >
        Member stories
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        {storyGrid.map((story, index) => (
          <Card
            key={index}
            sx={{ display: "flex", flexDirection: "row", width: 550 }}
            elevation={0}
          >
            {/* Left Side - Image */}
            <CardMedia
              component="img"
              sx={{ width: 200, objectFit: "cover" }} // Ensures proper scaling
              image={story.userImage}
              title={story.userStoryTitle}
            />

            {/* Right Side - Content */}
            <CardContent
              sx={{
                flex: 1,
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography gutterBottom variant="h6">
                {story.userStoryTitle}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {story.userDescription}
              </Typography>
              <CardActions sx={{ padding: "0", marginTop: "5px" }}>
                <Button
                  variant="contained"
                  size="small"
                  style={{ color: "#DFDEDD" }}
                >
                  Read more
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
  
}
