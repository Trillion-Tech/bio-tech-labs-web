# Biotec Lab - Docker Setup

This directory contains Docker configuration for the Biotec Lab website.

## Architecture

- **Frontend**: React application (port 3000)
- **Backend**: FastAPI application (port 8001) 
- **Database**: MongoDB (port 27017)
- **Reverse Proxy**: Nginx (production only)

## Development Setup

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild after code changes
docker-compose up --build
```

## Production Setup

```bash
# Start production services
docker-compose -f docker-compose.prod.yml up -d

# Update SSL certificates in ./ssl/ directory
# Update domain in nginx.conf and docker-compose.prod.yml
```

## Services

### Frontend (React)
- Built with Node.js 18 Alpine
- Served with serve package
- Accessible at http://localhost:3000

### Backend (FastAPI)
- Python 3.11 slim base image
- Auto-reload enabled in development
- API accessible at http://localhost:8001

### Database (MongoDB)
- MongoDB 7.0 official image
- Persistent data storage
- Accessible at mongodb://localhost:27017

## Environment Variables

### Frontend (.env)
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend (.env)
```
MONGO_URL=mongodb://mongodb:27017/biotec_lab
DB_NAME=biotec_lab
```

## Production Considerations

1. **SSL Certificates**: Add your SSL certificates to `./ssl/` directory
2. **Domain Configuration**: Update `nginx.conf` and `docker-compose.prod.yml` with your domain
3. **Environment Variables**: Update `REACT_APP_BACKEND_URL` to your production domain
4. **Database Security**: Configure MongoDB authentication for production
5. **Backup Strategy**: Implement MongoDB backup procedures

## Useful Commands

```bash
# Check container status
docker-compose ps

# Access container shell
docker exec -it biotec-backend-prod bash
docker exec -it biotec-frontend-prod sh

# View specific service logs
docker-compose logs backend
docker-compose logs frontend
docker-compose logs mongodb

# Remove all containers and volumes
docker-compose down -v
```