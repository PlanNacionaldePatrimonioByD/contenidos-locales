import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import geoJson from './contenidos-locales.json';
import './Map.css';
import { Modal, Box, Typography } from '@mui/material';

mapboxgl.accessToken =
  'pk.eyJ1IjoicGxhbm5hY2lvbmFsZGVwYXRyaW1vbmlvYnlkIiwiYSI6ImNtMjB1MXljOTBtMWwycW9ldDdlam45YjgifQ.jnZuxJYXvkfRIoa506TOLA';

const Marker = ({ onClick, children, feature }) => {
  const _onClick = () => {
    onClick(feature.properties);
  };

  return (
    <button onClick={_onClick} className="marker">
      {children}
    </button>
  );
};

const Map = () => {
  const mapContainerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/plannacionaldepatrimoniobyd/cm20ub0ef004k01qm12k7ehbb',
      center: [-74.08175, 4.60971],
      zoom: 5.5,
    });

    geoJson.features.forEach((feature) => {
      const ref = React.createRef();
      ref.current = document.createElement('div');
      createRoot(ref.current).render(
        <Marker onClick={() => markerClicked(feature.properties)} feature={feature} />
      );

      new mapboxgl.Marker(ref.current)
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => map.remove();
  }, []);

  const markerClicked = (properties) => {
    setModalContent(properties);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="map-container" ref={mapContainerRef} />
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <button onClick={handleClose} style={{ position: 'absolute', top: 10, right: 10 }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>

        </button>
          {modalContent.imagen && (
            <img src={`img/${modalContent.imagen}`} alt={modalContent.titulo} style={{ width: '100%', marginTop: '10px' }} />
          )}
          <Typography variant="h4" component="h4">
            {modalContent.titulo}
          </Typography>
          <Box sx={{ height: 10 }} />
          <Typography variant="body1">
            {modalContent.descripcion}
          </Typography>

          <Box sx={{ height: 10 }} />
          <Typography variant="body2">
            <strong>Autores:</strong> {modalContent.autores}
          </Typography>
          <Box sx={{ height: 10 }} />
          <Typography variant="body2">
            <strong>Lugar:</strong> {modalContent['Lugar (de la experiencia)']}
          </Typography>
          <Box sx={{ height: 10 }} />
          <Typography variant="body2">
            <strong>Etiquetas:</strong> {modalContent.etiquetas}
          </Typography>
          <Typography variant="body2">
            <strong>Formato:</strong> {modalContent.formato}
          </Typography>
          
        </Box>
      </Modal>
    </div>
  );
};

export default Map;