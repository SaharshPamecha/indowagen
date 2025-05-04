import pool from "@/app/libs/mysql.js";
import React from 'react';
import Link from 'next/link';
import { RowDataPacket } from 'mysql2/promise';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  ListItem,
  ListItemText,
  Divider,
  Chip,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import ProductSlider from "@/components/Products/ProductSlider";

// Define the Vehicle interface based on your database schema
interface Vehicle extends RowDataPacket {
  id: number;
  url: string;
  model_name: string | null;
  category: string | null;
  motor_type: string | null;
  controller: string | null;
  shocker_size: string | null;
  transmission: string | null;
  max_speed: string | null;
  tyre_size: string | null;
  brake_type: string | null;
  load_capacity: string | null;
  no_of_passengers: string | null;
  mileage: string | null;
  charger_input_voltage: string | null;
  charger_output_voltage: string | null;
  battery_set: string | null;
  single_battery: string | null;
  charging_time: string | null;
  battery_quantity: string | null;
  rear_rest_frame_slide: string | null;
  middle_rest_frame_slide: string | null;
  fog_light: string | null;
  decorative_pipe_light: string | null;
  water_guard_front: string | null;
  water_guard_back: string | null;
  wheel_base: string | null;
  other_features: string | null;
  coin_mobile_tray: string | null;
  dala_size: string | null;
  chassis_weight: string | null;
  vehicle_weight: string | null;
  length_mm: string | null;
  width_mm: string | null;
  height_mm: string | null;
  gap_middle_rear_seat: string | null;
  foot_mat: string | null;
  music_system: string | null;
  stepney: string | null;
  tools: string | null;
  screw_driver: string | null;
  jack_handle: string | null;
  wheel_wrench: string | null;
  spanner: string | null;
  hydraulic_jack: string | null;
}

// Define the ProductImage interface based on your product_images table schema
interface ProductImage extends RowDataPacket {
  id?: number;
  prod_id: number;
  img_link: string;
}

// Define the ProductColor interface based on your product_colors table schema
interface ProductColor extends RowDataPacket {
  id?: number;
  prod_id: number;
  color_name: string;
  color_img: string;
}

// Define the response type for getData
interface GetDataResponse {
  row: Vehicle | null;
  images: ProductImage[];
  colors: ProductColor[];
  error?: Error;
}

const getData = async (proId: string): Promise<GetDataResponse> => {
  try {
    const db = await pool;

    // First query: Fetch the vehicle by URL
    const q = "SELECT * FROM vehicles WHERE url = ?";
    const [rows]: [Vehicle[], any] = await db.query(q, [proId]);

    if (!rows || rows.length === 0) {
      return { row: null, images: [], colors: [] };
    }

    const id = rows[0].id;

    // Second query: Fetch the product images by prod_id
    const q1 = "SELECT * FROM product_images WHERE prod_id = ?";
    const [images]: [ProductImage[], any] = await db.query(q1, [id]);

    // Third query: Fetch the product colors by prod_id
    const q2 = "SELECT * FROM product_colors WHERE prod_id = ?";
    const [colors]: [ProductColor[], any] = await db.query(q2, [id]);

    return {
      row: rows[0] || null,
      images: images || [],
      colors: colors || [],
    };
  } catch (err) {
    console.error("Database error: ", err);
    return { row: null, images: [], colors: [], error: err as Error };
  }
};

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

const ProductDetail: React.FC<ProductDetailProps> = async ({ params }) => {
  const { id } = await params;
  if (!id) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center">
          Invalid Product ID
        </Typography>
      </Container>
    );
  }

  const arrproId = id;
  const { row: products, images, colors } = await getData(arrproId);

  if (!products) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" color="error">
          Product Not Found
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            startIcon={<ArrowBack />}
            component={Link}
            href="/products"
            color="primary"
          >
            Back to Products
          </Button>
        </Box>
      </Container>
    );
  }

  const productDetails: Record<string, string> = {
    model_name: products.model_name || "-",
    category: products.category || "-",
    motor_type: products.motor_type || "-",
    controller: products.controller || "-",
    shocker_size: products.shocker_size || "-",
    transmission: products.transmission || "-",
    max_speed: products.max_speed || "-",
    tyre_size: products.tyre_size || "-",
    brake_type: products.brake_type || "-",
    load_capacity: products.load_capacity || "-",
    no_of_passengers: products.no_of_passengers || "-",
    mileage: products.mileage || "-",
    charger_input_voltage: products.charger_input_voltage || "-",
    charger_output_voltage: products.charger_output_voltage || "-",
    battery_set: products.battery_set || "-",
    single_battery: products.single_battery || "-",
    charging_time: products.charging_time || "-",
    battery_quantity: products.battery_quantity || "-",
    rear_rest_frame_slide: products.rear_rest_frame_slide || "-",
    middle_rest_frame_slide: products.middle_rest_frame_slide || "-",
    fog_light: products.fog_light || "-",
    decorative_pipe_light: products.decorative_pipe_light || "-",
    water_guard_front: products.water_guard_front || "-",
    water_guard_back: products.water_guard_back || "-",
    wheel_base: products.wheel_base || "-",
    other_features: products.other_features || "-",
    coin_mobile_tray: products.coin_mobile_tray || "-",
    dala_size: products.dala_size || "-",
    chassis_weight: products.chassis_weight || "-",
    vehicle_weight: products.vehicle_weight || "-",
    length_mm: products.length_mm || "-",
    width_mm: products.width_mm || "-",
    height_mm: products.height_mm || "-",
    gap_middle_rear_seat: products.gap_middle_rear_seat || "-",
    foot_mat: products.foot_mat || "-",
    music_system: products.music_system || "-",
    stepney: products.stepney || "-",
    tools: products.tools || "-",
    screw_driver: products.screw_driver || "-",
    jack_handle: products.jack_handle || "-",
    wheel_wrench: products.wheel_wrench || "-",
    spanner: products.spanner || "-",
    hydraulic_jack: products.hydraulic_jack || "-",
  };

  const keyInfo = [
    { label: "Max Speed", value: productDetails.max_speed },
    { label: "Load Capacity", value: productDetails.load_capacity },
    { label: "Mileage", value: productDetails.mileage },
    { label: "Battery Quantity", value: productDetails.battery_quantity },
  ];

  return (
    <Box component="main" sx={{ py: 8, bgcolor: '#f9fafb', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Image and Key Info Section */}
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              sx={{
                borderRadius: 4,
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                bgcolor: 'white',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                },
              }}
            >
              {/* Image Section */}
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: '100%', md: '50%' },
                  bgcolor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  p: 2,
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 300, sm: 400, md: 500 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ProductSlider images={images} modelName={products.model_name || "Product"} />
                </Box>
              </Box>

              {/* Info Section */}
              <Box
                sx={{
                  p: { xs: 3, md: 5 },
                  width: { xs: '100%', md: '50%' },
                  bgcolor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: 2,
                }}
              >
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    color: '#1f2937',
                    fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' },
                    textTransform: 'uppercase',
                  }}
                >
                  {productDetails.model_name}
                </Typography>

                {/* Quick Specs Section */}
                <Box sx={{ width: '100%' }}>
                  <Chip
                    label={productDetails.category.replace('-', ' ').toUpperCase()}
                    size="medium"
                    sx={{
                      mb: 2,
                      bgcolor: '#dbeafe',
                      color: '#1e40af',
                      fontWeight: 600,
                      px: 2,
                      py: 0.5,
                      borderRadius: '20px',
                      letterSpacing: '0.8px',
                      fontSize: '0.9rem',
                    }}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 2,
                      justifyContent: 'flex-start',
                    }}
                  >
                    {/* First Row: 2 Specs */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 2,
                        flex: '1 1 100%',
                      }}
                    >
                      {keyInfo.slice(0, 2).map((spec) => (
                        <Box
                          key={spec.label}
                          sx={{
                            flex: { xs: '1 1 100%', sm: '1 1 45%' },
                            minWidth: 120,
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: 600,
                              color: '#1f2937',
                              fontSize: '0.95rem',
                            }}
                          >
                            {spec.label}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: spec.value !== '-' ? '#6b7280' : '#9ca3af',
                              fontSize: '0.9rem',
                            }}
                          >
                            {spec.value !== '-' ? spec.value : 'N/A'}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Second Row: 2 Specs */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 2,
                        flex: '1 1 100%',
                      }}
                    >
                      {keyInfo.slice(2, 4).map((spec) => (
                        <Box
                          key={spec.label}
                          sx={{
                            flex: { xs: '1 1 100%', sm: '1 1 45%' },
                            minWidth: 120,
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: 600,
                              color: '#1f2937',
                              fontSize: '0.95rem',
                            }}
                          >
                            {spec.label}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: spec.value !== '-' ? '#6b7280' : '#9ca3af',
                              fontSize: '0.9rem',
                            }}
                          >
                            {spec.value !== '-' ? spec.value : 'N/A'}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>

                {/* Enquire Now Button */}
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    bgcolor: '#1f2937',
                    color: 'white',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    borderRadius: '8px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    '&:hover': {
                      bgcolor: '#374151',
                    },
                  }}
                >
                  Enquire Now
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Available Colors Section */}
          {colors.length > 0 && (
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 4,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  bgcolor: 'white',
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: '#1e88e5',
                    mb: 3,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  }}
                >
                  Available Colors
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: 'flex-start',
                  }}
                >
                  {colors.map((color) => (
                    <Box
                      key={color.id}
                      sx={{
                        textAlign: 'center',
                        width: { xs: 80, sm: 100 },
                      }}
                    >
                      <Box
                        component="img"
                        src={`https://forestgreen-capybara-315761.hostingersite.com/assets/colors/${color.color_img}`}
                        alt={color.color_name}
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          objectFit: 'cover',
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#1f2937',
                          textTransform: 'capitalize',
                          fontSize: '0.85rem',
                          mt: 0.5,
                          display: 'block',
                        }}
                      >
                        {color.color_name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          )}

          {/* Full Specifications Section */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 5,
                borderRadius: 4,
                boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                bgcolor: 'white',
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 600, color: '#1e88e5', mb: 4 }}
              >
                Full Specifications
              </Typography>
              <Grid container spacing={3}>
                {Object.entries(productDetails).map(([key, value]) => (
                  <Grid item xs={12} sm={6} md={3} key={key}>
                    <ListItem sx={{ py: 1.5 }}>
                      <ListItemText
                        primary={key.replace(/_/g, ' ').toUpperCase()}
                        secondary={value || '-'}
                        primaryTypographyProps={{
                          variant: 'subtitle2',
                          fontWeight: 500,
                          color: '#1e88e5',
                        }}
                        secondaryTypographyProps={{
                          variant: 'body2',
                          color: value ? '#455a64' : '#b0bec5',
                          fontSize: '1rem',
                        }}
                      />
                    </ListItem>
                    <Divider light />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetail;