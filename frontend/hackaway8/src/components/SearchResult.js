const {
  Container,
  CardHeader,
  Box,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Card,
  Avatar,
  Grid,
  Chip,
  Button,
} = require("@mui/material");
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WarningIcon from "@mui/icons-material/Warning";
import Link from "next/link";

const SearchResult = ({ data, ai }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outline">
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "blue" }}
              aria-label="recipe"
              // src={data.pagemap.cse_image[0].src}
            >
              {data.title[0]}
            </Avatar>
          }
          action={
            <Container>
              {" "}
              {ai.name == "loading" ? (
                <Button loading variant="outlined">
                  Loading
                </Button>
              ) : (
                <Container>
                  {ai.percentage && parseInt(ai.percentage) >= 60 ? (
                    <Chip
                      label="AI warning"
                      icon={<WarningIcon fontSize="small" />}
                      variant="outlined"
                    />
                  ) : (
                    ""
                  )}
                </Container>
              )}
            </Container>
          }
          title={
            <Link href={data.link}>
              <Typography sx={{ color: "text.primary" }}>
                {data.displayLink}
              </Typography>
            </Link>
          }
          subheader={
            <Link href={data.link}>
              <Typography sx={{ color: "text.primary" }}>
                {data.link}
              </Typography>
            </Link>
          }
        />
        <CardContent sx={{ mt: -3 }}>
          <Link href={data.link}>
            <Typography variant="body1" sx={{ color: "text.primary" }}>
              {data.title}
            </Typography>
          </Link>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {data.snippet}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SearchResult;
