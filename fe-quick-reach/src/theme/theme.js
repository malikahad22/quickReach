import { createTheme } from '@mui/material';

export const theme = createTheme({
   palette: {
      primary: {
         main: '#3e3e3e',  // Primary color (dark grey)
         light: '#ecf0f1', // Lighter shade of primary
         dark: '#2c2c2c',  // Darker shade of primary
         contrastText: '#ffffff'  // Text color on primary background
      },
      secondary: {
         main: '#8e44a4', // Secondary color (purple)
         light: '#a64cb4', // Lighter shade of secondary
         dark: '#732f88',  // Darker shade of secondary
         contrastText: '#ffffff'  // Text color on secondary background
      },
      background: {
         default: '#f5f5f5',  // General background color
         paper: '#ffffff',    // Background for paper components (cards, dialogs, etc.)
      },
      text: {
         primary: '#3e3e3e',   // Main text color
         secondary: '#8e44a4', // Text color for secondary items
         disabled: '#bdbdbd',  // Disabled text
         hint: '#9e9e9e',      // Hint text color (for placeholders)
      },
      divider: '#e0e0e0',  // Color for dividers
   },

   typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(),
      h1: {
         fontFamily: 'Poppins, sans-serif',
         fontWeight: 700,
         fontSize: '3rem',  // Main heading (H1)
         color: '#3e3e3e',  // Dark grey for primary text
      },
      h2: {
         fontFamily: 'Poppins, sans-serif',
         fontWeight: 600,
         fontSize: '2.5rem',  // Subheading (H2)
         color: '#3e3e3e',
      },
      h3: {
         fontFamily: 'Poppins, sans-serif',
         fontWeight: 500,
         fontSize: '2rem',  // Smaller heading (H3)
         color: '#3e3e3e',
      },
      h4: {
         fontFamily: 'Poppins, sans-serif',
         fontWeight: 400,
         fontSize: '1.75rem',  // Small heading (H4)
         color: '#3e3e3e',
      },
      h5: {
         fontFamily: 'Poppins, sans-serif',
         fontWeight: 300,
         fontSize: '1.5rem',  // Minor headings (H5)
         color: '#8e44a4',    // Secondary color for minor headings
      },
      h6: {
         fontFamily: 'Poppins, sans-serif',
         fontWeight: 300,
         fontSize: '1.25rem',  // Smallest heading (H6)
         color: '#8e44a4',
      },
      body1: {
         fontFamily: 'Poppins, sans-serif',
         fontWeight: 400,
         fontSize: '1rem',    // Main content text
         color: '#3e3e3e',
         lineHeight: 1.5,
      },
      body2: {
         fontFamily: 'Poppins, sans-serif',
         fontWeight: 300,
         fontSize: '0.875rem',  // Smaller content text
         color: '#3e3e3e',
         lineHeight: 1.5,
      },
      button: {
         fontFamily: 'Poppins, sans-serif',
         fontWeight: 600,
         fontSize: '0.875rem',  // Button text
         textTransform: 'uppercase',
         color: '#ffffff',     // Ensure text is white on primary buttons
      },
      caption: {
         fontFamily: 'Poppins, sans-serif',
         fontWeight: 300,
         fontSize: '0.75rem',   // Caption and small text
         color: '#9e9e9e',
      },
   },

   shape: {
      borderRadius: 8,  // Border radius for rounded components
   },

   components: {
      MuiButton: {
         styleOverrides: {
            root: {
               borderRadius: 8,    // Rounded corners for buttons
               padding: '8px 16px',  // Padding for buttons
            },
            containedPrimary: {
               backgroundColor: '#3e3e3e',
               color: '#ffffff',
               '&:hover': {
                  backgroundColor: '#2c2c2c', // Darker shade on hover
               },
            },
            containedSecondary: {
               backgroundColor: '#8e44a4',
               color: '#ffffff',
               '&:hover': {
                  backgroundColor: '#732f88',  // Darker shade on hover
               },
            },
         },
      },
      MuiPaper: {
         styleOverrides: {
            root: {
               padding: '16px',
               backgroundColor: '#ffffff',
               boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',  // Soft shadow for paper components
            },
         },
      },
      MuiTextField: {
         styleOverrides: {
            root: {
               marginBottom: '16px',
               backgroundColor: '#ffffff', // White background for text fields
               borderColor: '#e0e0e0',     // Light grey border
               '& .MuiInputBase-input': {
                  color: '#3e3e3e',        // Dark grey input text
               },
               '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                     borderColor: '#e0e0e0', // Border color for text fields
                  },
                  '&:hover fieldset': {
                     borderColor: '#3e3e3e', // Change border color on hover
                  },
                  '&.Mui-focused fieldset': {
                     borderColor: '#3e3e3e', // Change border color when focused
                  },
               },
            },
         },
      },
      MuiAppBar: {
         styleOverrides: {
            root: {
               backgroundColor: '#3e3e3e', // Dark background for the AppBar
               color: '#ffffff',           // White text in the AppBar
            },
         },
      },
      MuiDivider: {
         styleOverrides: {
            root: {
               backgroundColor: '#e0e0e0', // Divider color
            },
         },
      },
   },
});
