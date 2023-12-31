using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var CONNECTION = builder.Configuration.GetConnectionString("CarroConnection");

builder.Services.AddDbContext<CarroContext>(opts =>
    opts.UseMySql(
        CONNECTION, 
        ServerVersion.AutoDetect(CONNECTION)
        ));

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

///////////////////////////////////////////////////////////////////////////

var USERCONNECTION = builder.Configuration.GetConnectionString("UserConnection");

builder.Services.AddDbContext<UserContext>(opts =>
    opts.UseMySql(
        USERCONNECTION,
        ServerVersion.AutoDetect(USERCONNECTION)

        ));
builder.Services
    .AddIdentity<User, IdentityRole>()
    .AddEntityFrameworkStores<UserContext>()
    .AddDefaultTokenProviders();



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
