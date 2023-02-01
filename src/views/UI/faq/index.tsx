import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../../theme";
import Header from "../../shared/Header";

type Props = {};

const Faq = (props: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Most Frequently Ask Questions" />
      {/* QUESTION_ONE */}
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: { backgroundColor: colors.blueAccent[900] },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            Q: What is your return policy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
            A: We accept returns within 30 days of purchase. Items must be in
            their original condition and packaging to be eligible for a refund.
            Contact our customer support team for more information on how to
            initiate a return.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* QUESTION_ONE */}
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: { backgroundColor: colors.blueAccent[900] },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            Q: How do I track my order?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A: You will receive a tracking number via email once your order has
            shipped. You can also log into your account on our website to view
            the latest status of your order.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      {/* QUESTION_ONE */}
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: { backgroundColor: colors.blueAccent[900] },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            Q: What payment methods do you accept?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A: We accept Visa, Mastercard, American Express, and PayPal.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      {/* QUESTION_ONE */}
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: { backgroundColor: colors.blueAccent[900] },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            Q: Do you ship internationally?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A: Yes, we offer international shipping to selected countries.
            Please refer to our shipping policy for more information on rates
            and delivery times.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
    </Box>
  );
};

export default Faq;
