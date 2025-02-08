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
} = require("@mui/material");
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WarningIcon from "@mui/icons-material/Warning";
import Link from "next/link";

// data =
//  {
//   icon: "ignore",
//   webTitle: "Dell",
//   url: "dell.com/innovate",
//   title: "Dell Technologies",
//   desc: "Exploring the latest innovations in computing and enterprise solutions.",
// }

const SearchResult = ({ data }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
              {data.icon[0]}
            </Avatar>
          }
          action={
            <Container>
              {data.ai ? (
                <Chip
                  label="AI warning"
                  icon={<WarningIcon fontSize="small" />}
                  variant="outlined"
                />
              ) : (
                ""
              )}
            </Container>
          }
          title={data.webTitle}
          subheader={data.url}
        />
        <CardContent sx={{ pt: -12 }}>
          <Link href={data.url}>
            <Typography variant="bod1">{data.title}</Typography>
          </Link>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {data.desc}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SearchResult;
