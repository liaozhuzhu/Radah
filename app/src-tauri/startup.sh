#!/bin/bash

# Set up display
export DISPLAY=:0
export HOME=/home/vncuser
export USER=vncuser

# Create necessary directories
mkdir -p $HOME/.vnc

# Start VNC server as vncuser with security acknowledgment
vncserver $DISPLAY \
    -geometry 1920x1080 \
    -depth 24 \
    -localhost no \
    -rfbport 5900 \
    -SecurityTypes None \
    -I-KNOW-THIS-IS-INSECURE \
    -fg

# Wait for VNC server to start
sleep 2

# Start Xfce session
DISPLAY=:0 startxfce4 &

# Keep the script running
tail -f /dev/null